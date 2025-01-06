import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne} from "typeorm";
import { ProductImage } from "./product-image.entity";
import { User } from "src/auth/entities/user.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity({name: 'products'})
export class Product {

    @ApiProperty({
        example: '01375b02-7aea-4fb1-a64b-255d0a3d1472',
        description: 'Unique identifier of the product.',
        uniqueItems: true
    })
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty({
        example: "Women's T Logo Long Sleeve Scoop Neck Tee",
        description: 'Title of the product.',
        uniqueItems: true
    })
    @Column({
        type: 'text', 
        unique: true 
    })
    title: string;

    @ApiProperty({
        example: '0',
        description: 'Price of the product.',
        uniqueItems: true
    })
    @Column({
        type: 'float',
        default: 0,
    })
    price: number;

    @ApiProperty({
        example: 'This is a long sleeve tee with a scoop neck and a T logo.',
        description: 'Description of the product.',
        default: null
    })
    @Column({
        type: 'text',
        nullable: true,
    })
    description: string;

    @ApiProperty({
        example: 'womens_t_logo_long_sleeve_scoop_neck_tee',
        description: 'Slug of the product - For SEO purposes.',
        uniqueItems: true
    })
    @Column({
        type: 'text',
        unique: true,
    })
    slug: string;

    @ApiProperty({
        example: '10',
        description: 'Stock of the product.',
        default: 0
    })
    @Column({
        type: 'int',
        default: 0
    })
    stock: number;

    @ApiProperty({
        example: ['S', 'M', 'L'],
        description: 'Sizes available for the product.'
    })
    @Column({
        type: 'text',
        array: true
    })
    sizes: string[];

    @ApiProperty({
        example: "Women",
        description: "Gender of the product."
    })
    @Column('text')
    gender: string;

    @ApiProperty({
        example: ['Tee', 'Long Sleeve'],
        description: 'Tags for the product'
    })
    @Column({
        type: 'text',
        array: true,
        default: []
    })
    tags: string[];

    @ApiProperty({
        example: 'https://www.example.com/product-image.jpg',
        description: 'Main image of the product.'
    })
    @OneToMany( 
        () => ProductImage, 
        (productImage) => productImage.product,
        {cascade: true, eager: true}
    )
    images?: ProductImage[];

    @ManyToOne(
        () => User,
        (user) => user.product,
        {eager: true}
    )
    user: User;

    @BeforeInsert()
    checkSlugInsert() {
        if (!this.slug) {
            this.slug = this.title;
        }
        this.slug = this.slug.toLowerCase().replaceAll(" ", "_").replaceAll("'", "");
    }

    @BeforeUpdate()
    checkSlugUpdate() {
        this.slug = this.slug.toLowerCase().replaceAll(" ", "_").replaceAll("'", "");
    }
}
