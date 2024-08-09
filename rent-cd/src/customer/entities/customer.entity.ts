import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  codeCustomer: number;

  @Column({ type: 'varchar', length: 30 })
  name: string;

  @Column({ type: 'varchar', length: 15 })
  dni: string;

  @Column({ type: 'varchar', length: 40 })
  email: string;

  @Column({ type: 'varchar', length: 100 })
  address: string;

  @Column({ type: 'varchar', length: 20 })
  phone: string;

  @Column({ type: 'date' })
  birthDate: Date;

  @Column({ type: 'date' })
  enrollmentDate: Date;

  @Column({ type: 'varchar', length: 100 })
  interestTopic: string;

  @Column({ type: 'varchar', length: 20 })
  status: string;
}
