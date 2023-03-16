// src/tweet/tweet.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Tweet } from '@prisma/client';

@Injectable()
export class TweetService {
  constructor(private readonly prisma: PrismaService) {}

  async getTweets(): Promise<Tweet[]> {
    return this.prisma.tweet.findMany({
      orderBy: { createdAt: 'desc' },
      include: { user: true },
    });
  }
}
