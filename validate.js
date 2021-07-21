function replaceword(){
    var a = document.getElementById("user_text").value
    if(a==""){
        alert("Please fill all the fields");
        document.Myform.text.focus();
        return false;
    }
    var b = document.getElementById("user_word").value
    if(b==""){
        alert("Please fill all the fields");
        document.Myform.word.focus();
        return false;
    }

    var c = document.getElementById("user_replace").value
    if(c==""){
        alert("Please fill all the fields");
        document.Myform.replace.focus();
        return false;
    }

    if((a.includes(b)==false)){
        alert("The word isn't in the text!!!\n Write the word which that belongs to text");
        return false;
    }

    let result = a.replaceAll(b,c);
    alert(result);

    return true
}