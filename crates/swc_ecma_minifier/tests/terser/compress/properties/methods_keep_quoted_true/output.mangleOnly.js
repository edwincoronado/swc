class a {
    Quoted() {}
    Unquoted() {}
}
f1({
    Quoted () {},
    Unquoted () {},
    Prop: 3
});
f2({
    Quoted: function() {}
});
f3({
    Quoted: ()=>{}
});
