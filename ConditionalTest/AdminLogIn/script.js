function main(){
    let userName = prompt("Who's there?", '');
    if (userName === 'Admin') {
        let pass = prompt('Password?', '');
        if (pass === 'TheMaster') {
    	    alert('Welcome!');
        } else if (pass === '') {
            alert('Canceled.');
        } else {
            alert('Wrong password');
        }
    } else if (userName === '') {
        alert('Canceled');
    } else {
        alert("I don't know you");
    }
}

main();