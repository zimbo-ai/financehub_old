<script lang="ts">
    import { enhance } from "$app/forms";
    import Button from "$lib/components/Button/Button.svelte";
    import Input from "$lib/components/Input/Input.svelte";
    import Text from "$lib/components/Text/Text.svelte";
    import Validate from "$lib/utils/Validate";
    import Errors from "errors";
    import type { SubmitFunction } from "./$types";
    
    let error:Record<"username" | "email" | "password" | "general" , string > ={
        username:"",
        email:"",
        password:"",
        general:"",
    }
    let loading:boolean = false;

    const onSubmit: SubmitFunction = ({cancel,data }) => {
        error.general="";
        if(error.username || error.email || error.password) return cancel();

        error.username = Validate.username(data.get("username")?.toString() ?? "").message ?? ""
        error.email = Validate.email(data.get("email")?.toString() ?? "").message ?? ""
        error.password = Validate.password(data.get("password")?.toString() ?? "").message ?? ""

        if(error.username || error.email || error.password) return cancel();
        
        
		const timeout = setTimeout(() => {
			loading = true;
		}, 100);
        
		return async (e) => {
            const { update, result }:{ update:typeof e.update, result:any } = e;

            if(result?.data?.message === Errors.Account.ERR_EMAIL_TAKEN) error.email = Errors.Account.ERR_EMAIL_TAKEN;
            else if(result?.data?.message === Errors.Account.ERR_USERNAME_TAKEN) error.username = Errors.Account.ERR_USERNAME_TAKEN;
            else error.general = result?.data?.message ?? "";

			await update();
			clearTimeout(timeout);
			loading = false;
		};
	};

</script>

<form use:enhance={onSubmit} method="POST" action="/account/signup/?redirectTo=/">
    <div
    class="form__logo-container"
    >
        <div
        style="
                width:64px; 
                height:64px; 
                border-radius:var(--border-radius-lg); 
                background:lightgrey;
              "
    ></div>   
    </div>
    <div class="form__header">
        <Text root="h1" size="xxl" weight="medium">Create an account</Text>
        <Text color="weakest" size="md">Sign up using your email to continue.</Text>
    </div>

    <div class="form__input-container">
        <Input
            required
            type="text"
            disabled={loading}
            error={error.username} 
            name="username"
            placeholder="Username"
            description="Usernames can only contain alpha-numeric characters, periods, and underscores."
            on:input={()=>{error.username = ""}}
            />
        <Input
            required
            type="email"
            error={error.email}
            disabled={loading}
            name="email"
            placeholder="Email" 
            on:input={()=>{error.email = ""}}
            />
        <Input
            required
            name="password"
            type="password"
            error={error.password}
            disabled={loading}
            placeholder="Password" 
            on:input={()=>{error.password = ""}}
            />
            <Text color="red" class="form__error" size="md">
                {error.general}‎ 
            </Text>
    </div>


    <div class="form__button-container">
        <Button size="lg" variant="primary" type="submit" {loading}>Continue</Button>
        <Button size="lg" variant="default" type="submit" disabled={loading}>Already have an account?</Button>
    </div>
</form>
<span class="form__consent">
    <Text color="weakest" size="sm">
        By clicking "Continue", you agree to the Terms and acknowledge the Privacy Policy
    </Text>
</span>
