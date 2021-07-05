studentarray=[];
function submit(){
    var s1=document.getElementById("name1").value;
    var s2=document.getElementById("name2").value;
    var s3=document.getElementById("name3").value;
    var s4=document.getElementById("name4").value;
    studentarray.push(s1);
    studentarray.push(s2);
    studentarray.push(s3);
    studentarray.push(s4);
    console.log(studentarray);
    document.getElementById("displayname").innerHTML=studentarray;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sort(){
    studentarray.sort();
    console.log(studentarray)
    document.getElementById("displayname").innerHTML=studentarray;
}