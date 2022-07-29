import { Base } from 'src/common/base.entity';
import { Column, Entity } from 'typeorm';
import { EUserType } from 'src/shared/types/users';

@Entity()
export class Users extends Base {
  @Column()
  username: string;

  @Column()
  email: string;

  @Column({ type: 'enum', enum: EUserType, default: EUserType.Github })
  type: EUserType;
}
