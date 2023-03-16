// src/tweet/tweet.controller.ts
import { Controller, Get } from '@nestjs/common';
import { TweetService } from './tweet.service';
import { Tweet } from '@prisma/client';

@Controller('tweets')
export class TweetController {
  constructor(private readonly tweetService: TweetService) {}

  @Get()
  async getTweets(): Promise<Tweet[]> {
    return this.tweetService.getTweets();
  }
}
