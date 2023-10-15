CREATE TABLE `article_sources` (
	`id` char(26) NOT NULL,
	`name` varchar(255) NOT NULL,
	`url` varchar(512) NOT NULL,
	CONSTRAINT `article_sources_id` PRIMARY KEY(`id`),
	CONSTRAINT `unique_article_src_url` UNIQUE(`url`)
);
--> statement-breakpoint
CREATE TABLE `linked_articles` (
	`id` char(26) NOT NULL,
	`published_at` date NOT NULL,
	`title` varchar(255) NOT NULL,
	`url` varchar(512) NOT NULL,
	`image_src` varchar(1024) NOT NULL,
	`description` text NOT NULL,
	`content` text NOT NULL,
	`source_id` char(26) NOT NULL,
	CONSTRAINT `linked_articles_id` PRIMARY KEY(`id`),
	CONSTRAINT `unique_article_url` UNIQUE(`url`)
);
--> statement-breakpoint
CREATE TABLE `original_articles` (
	`id` char(26) NOT NULL,
	`published_at` date NOT NULL,
	`title` varchar(255) NOT NULL,
	`content` text NOT NULL,
	CONSTRAINT `original_articles_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `sessions` (
	`id` char(26) NOT NULL,
	`user_account_id` char(26) NOT NULL,
	`user_profile_id` char(26) NOT NULL,
	`created_at` date NOT NULL,
	`user_agent` varchar(512),
	`ip_address` varchar(64),
	CONSTRAINT `sessions_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `user_accounts` (
	`id` char(26) NOT NULL,
	`username` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`full_name` varchar(255),
	`profile_img_url` varchar(512),
	`email_verified_at` date,
	CONSTRAINT `user_accounts_id` PRIMARY KEY(`id`),
	CONSTRAINT `user_accounts_username_unique` UNIQUE(`username`),
	CONSTRAINT `user_accounts_email_unique` UNIQUE(`email`)
);
