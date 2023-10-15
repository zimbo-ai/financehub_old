CREATE TABLE `user_profiles` (
	`id` char(26) NOT NULL,
	`username` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`full_name` varchar(255),
	`profile_img_url` varchar(512),
	`email_verified_at` date,
	CONSTRAINT `user_profiles_id` PRIMARY KEY(`id`),
	CONSTRAINT `user_profiles_username_unique` UNIQUE(`username`),
	CONSTRAINT `user_profiles_email_unique` UNIQUE(`email`)
);
--> statement-breakpoint
ALTER TABLE `user_accounts` DROP CONSTRAINT `user_accounts_username_unique`;--> statement-breakpoint
ALTER TABLE `user_accounts` DROP CONSTRAINT `user_accounts_email_unique`;--> statement-breakpoint
ALTER TABLE `user_accounts` ADD `created_at` date NOT NULL;--> statement-breakpoint
ALTER TABLE `user_accounts` ADD `last_login` date NOT NULL;--> statement-breakpoint
ALTER TABLE `user_accounts` ADD `auth_provider` enum('CREDENTIALS','GOOGLE') NOT NULL;--> statement-breakpoint
ALTER TABLE `user_accounts` ADD `password_hash` varchar(255);--> statement-breakpoint
ALTER TABLE `user_accounts` ADD `user_profile_id` char(26) NOT NULL;--> statement-breakpoint
ALTER TABLE `user_accounts` DROP COLUMN `username`;--> statement-breakpoint
ALTER TABLE `user_accounts` DROP COLUMN `email`;--> statement-breakpoint
ALTER TABLE `user_accounts` DROP COLUMN `full_name`;--> statement-breakpoint
ALTER TABLE `user_accounts` DROP COLUMN `profile_img_url`;--> statement-breakpoint
ALTER TABLE `user_accounts` DROP COLUMN `email_verified_at`;