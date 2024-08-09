import { RentalDetail } from 'src/rental/entities/rental.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class CD {
  @PrimaryGeneratedColumn()
  cdNumber: number;

  @Column({ type: 'int' })
  titleCode: number;

  @Column({ type: 'varchar', length: 50 })
  condition: string;

  @Column({ type: 'varchar', length: 100 })
  location: string;

  @Column({ type: 'varchar', length: 20 })
  status: string;

  @OneToMany(() => RentalDetail, (rentalDetail) => rentalDetail.cd)
  rentalDetails: RentalDetail[];
}
