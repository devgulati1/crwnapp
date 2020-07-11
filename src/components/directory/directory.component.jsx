import React, { Component } from 'react';
import MenuItem from "../menu-item/menu-item.component"
import "./directory.style.scss"
import { sections } from './sections';



class Directory extends Component{
    constructor(){
        super()
        this.state={
         section :sections
         }

    }
    render(){
        return(
            <div className="directory-menu">
            {
           this.state.section.map(({title,id,imageUrl,size})=>{
            return <MenuItem  key={id} title={title} imageUrl={imageUrl} size={size}/>}
           
            )
           }
            </div>
            
        )
    }

}
export default Directory