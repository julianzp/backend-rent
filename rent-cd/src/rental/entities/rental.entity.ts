import { CD } from 'src/cd/entities/cd.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Rental {
  @PrimaryGeneratedColumn()
  rentalNumber: number;

  @Column({ type: 'int' })
  customerCode: number;

  @Column({ type: 'date' })
  rentalDate: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  rentalValue: number;

  @OneToMany(() => RentalDetail, (rentalDetail) => rentalDetail.rental)
  rentalDetails: RentalDetail[];
}

@Entity()
export class RentalDetail {
  @Column({ type: 'int' })
  rentalNumber: number;

  @PrimaryGeneratedColumn()
  item: number;

  @Column({ type: 'int' })
  titleCode: number;

  @Column({ type: 'int' })
  cdNumber: number;

  @Column({ type: 'int' })
  loanDays: number;

  @Column({ type: 'date' })
  returnDate: Date;

  @ManyToOne(() => Rental, (rental) => rental.rentalDetails)
  @JoinColumn({ name: 'rentalNumber' })
  rental: Rental;

  @ManyToOne(() => CD, (cd) => cd.rentalDetails)
  @JoinColumn({ name: 'cdNumber' })
  cd: CD;
}
