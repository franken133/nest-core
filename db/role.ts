import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("role",{schema:"vone" } )
@Index("uk_role_code",["roleCode",],{unique:true})
@Index("uk_role_name",["roleName",],{unique:true})
export class role {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"id"
        })
    id:string;
        

    @Column("varchar",{ 
        nullable:false,
        unique: true,
        length:100,
        name:"role_name"
        })
    roleName:string;
        

    @Column("varchar",{ 
        nullable:false,
        unique: true,
        length:50,
        name:"role_code"
        })
    roleCode:string;
        

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
