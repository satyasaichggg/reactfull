function Header({headerInfo,cname,children}){
    
    // let {headerInfo,cname}=props;
    // console.log(headerInfo,cname); 
//  console.log(props.headerInfo.email,cname);
   
//  console.log(props.headerInfo.phon);
    return (
        <div>
           
            <h3>Header part</h3>{children}
        <h1>{headerInfo.email}  | {cname}</h1>
       
       </div>

    )
}
export { Header};