import { Column, Entity, PrimaryColumn } from 'typeorm';
@Entity({ name: 'users' })
export class Users {
    @PrimaryColumn()
    id: string

    @Column()
    username: string

    @Column()
    password: string

    @Column()
    email: string

    @Column()
    refreshToken: string
}