import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('table_streaming')
export class Streaming {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  title: string;
  @Column()
  artists: string;
  @Column()
  link: string;
}
