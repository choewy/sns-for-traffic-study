import { ConflictException, Injectable } from '@nestjs/common';

import { FollowRepository } from '../repository/follow.repository';
import { MemberDto } from '@domain/member/dto/member.dto';

@Injectable()
export class FollowWriteService {
  constructor(private readonly followRepository: FollowRepository) {}

  async create(fromMember: MemberDto, toMember: MemberDto) {
    if (fromMember.id === toMember.id) {
      throw new ConflictException({
        from: fromMember.id,
        to: toMember.id,
      });
    }

    await this.followRepository.insert(
      this.followRepository.create({
        fromMember: { id: fromMember.id },
        toMember: { id: toMember.id },
      }),
    );
  }
}
