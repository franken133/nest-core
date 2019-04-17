import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("menu",{schema:"vone" } )
@Index("uk_name",["name",],{unique:true})
export class menu {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"id"
        })
    id:string;
        

    @Column("varchar",{ 
        nullable:false,
        unique: true,
        name:"name"
        })
    name:string;
        

    @Column("varchar",{ 
        nullable:false,
        name:"label"
        })
    label:string;
        

    @Column("varchar",{ 
        nullable:true,
        name:"icon"
        })
    icon:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"icon_theme"
        })
    iconTheme:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"component"
        })
    component:string | null;
        

    @Column("bigint",{ 
        nullable:false,
        name:"parent_id"
        })
    parentId:string;
        

    @Column("tinyint",{ 
        nullable:false,
        width:1,
        default: () => "'1'",
        name:"is_leaf"
        })
    isLeaf:boolean;
        

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
