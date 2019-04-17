import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("privilege",{schema:"vone" } )
export class privilege {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"id"
        })
    id:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:100,
        name:"priv_code"
        })
    privCode:string;
        

    @Column("varchar",{ 
        nullable:true,
        name:"priv_desc"
        })
    privDesc:string | null;
        

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
