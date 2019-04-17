import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("admin_user",{schema:"vone" } )
@Index("login_uk",["login",],{unique:true})
export class adminUser {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"id"
        })
    id:string;
        

    @Column("varchar",{ 
        nullable:false,
        unique: true,
        name:"login"
        })
    login:string;
        

    @Column("varchar",{ 
        nullable:true,
        name:"password"
        })
    password:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:100,
        name:"nick_name"
        })
    nickName:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"gender"
        })
    gender:string | null;
        

    @Column("varchar",{ 
        nullable:false,
        length:10,
        default: () => "'N'",
        name:"status"
        })
    status:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:100,
        name:"phone"
        })
    phone:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:500,
        name:"photo_img"
        })
    photoImg:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:100,
        name:"province"
        })
    province:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:100,
        name:"city"
        })
    city:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:100,
        name:"region"
        })
    region:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"address"
        })
    address:string | null;
        

    @Column("datetime",{ 
        nullable:false,
        default: () => "CURRENT_TIMESTAMP",
        name:"gmt_create"
        })
    gmtCreate:Date;
        

    @Column("datetime",{ 
        nullable:false,
        default: () => "CURRENT_TIMESTAMP",
        name:"gmt_modified"
        })
    gmtModified:Date;
        
}
