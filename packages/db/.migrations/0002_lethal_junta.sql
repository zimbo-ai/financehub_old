ALTER TABLE `sessions` ADD `expires_at` date NOT NULL;--> statement-breakpoint
CREATE INDEX `username_index` ON `user_profiles` (`username`);--> statement-breakpoint
CREATE INDEX `email_index` ON `user_profiles` (`email`);