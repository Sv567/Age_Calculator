function checkString (s1 , s2) {
    if(s1.length !== s2.length) {
        console.log("false");
        return;
    }
    let str1 = s1.split('').sort().join('');
    let str2 = s2.split('').sort().join('');
    
    if(str1 === str2) console.log("true");
    else console.log("false");
}
checkString('iadni','india');
checkString('geekster','stergggk');
checkString('vshiya','shivay');

