import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("role_privilege",{schema:"vone" } )
export class rolePrivilege {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"id"
        })
    id:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"priv_id"
        })
    privId:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"role_id"
        })
    roleId:string;
        

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
