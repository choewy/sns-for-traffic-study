import { ApiResponseProperty } from '@nestjs/swagger';

import { Member } from '../entity/member.entity';

export class MemberDto {
  @ApiResponseProperty({ type: Number })
  readonly id: number;

  @ApiResponseProperty({ type: String })
  readonly email: string;

  @ApiResponseProperty({ type: String })
  readonly nickname: string;

  @ApiResponseProperty({ type: Date, format: 'date' })
  readonly birthday: string;

  constructor(member: Member) {
    this.id = member.id;
    this.email = member.email;
    this.nickname = member.nickname;
    this.birthday = member.birthdayToString();
  }
}