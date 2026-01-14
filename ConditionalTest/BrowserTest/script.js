let browser = prompt("Enter browser name!")
switch (browser) {
    case 'Edge':
        alert("You've got the Edge!");
        break;
    case 'Chrome':
        alert("You've got the Chrome!");
        break;
    case 'Firefox':
        alert("You've got the Firefox!");
        break;
    case 'Safari':
        alert("You've got the Safari!");
        break;
    case 'Opera':
        alert('Okay we support these browsers too');
        break;
    default:
        alert('We hope that this page looks ok!');
}