const path =require("path");
const express= require("express");
const app =express();
app.set('view engine','ejs');
const staticPath=path.join(__dirname,'html');
app.use(express.static(staticPath));
app.get('/',(req,res)=>{
     ((res.sendFile(`${staticPath}/scholar.html`)));
});
app.get('/typesofscholarship',(req,res)=>{
    res.sendFile(`${staticPath}/typesofscholarship.html`);
});
app.get('/aboutus',(req,res)=>{
    res.sendFile(`${staticPath}/aboutus.html`);
});
app.get('/ourlinks',(req,res)=>{
    res.sendFile(`${staticPath}/ourlinks.html`);
});
app.get('/typesofscholarship/sportscategories',(res,req)=>{
    res.sendFile(`${staticPath}/sportssch.html`);
});
app.get('typesofscholarship/sportscategories/football',(res,req)=>{
    res.sendFile(`${staticPath}/football.html`);
});
app.get('typesofscholarship/sportscategories/basketball',(res,req)=>{
    res.sendFile(`${staticPath}/basketball.html`);
});
app.get('typesofscholarship/sportscategories/cricket',(res,req)=>{
    res.sendFile(`${staticPath}/cricket.html`);
});
app.get('typesofscholarship/sportscategories/football',(res,req)=>{
    res.sendFile(`${staticPath}/football.html`);
});
app.listen(5501);

