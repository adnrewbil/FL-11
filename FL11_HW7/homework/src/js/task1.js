let email = prompt('Please write your email:');
const six = 6;
const five = 5;

if (email === null || email === '') {
    alert('Canceled.');
} else if (email.length <= six) {
    alert('I don\'t know any emails having name length less than 6 symbols');
} else if (email === 'user@gmail.com' || email === 'admin@gmail.com') {
    let pass = prompt('Please write your password');
    if (email === 'user@gmail.com' && pass === 'UserPass' || email === 'admin@gmail.com' && pass === 'AdminPass') {
        let changePassword = confirm('Do you want to change your password?');
        if (changePassword === true) {
            let oldPass = prompt('Please write an old password:');
            if (oldPass === pass) {
                let newPass = prompt('Please write new password');
                if (newPass.length < five) {
                    alert('It\'s too short password. Sorry.');
                } else if (newPass === null || newPass === '') {
                    alert('Canceled.');
                } else if (newPass) {
                    let new1Pass = prompt('Enter it again')
                    if (newPass === new1Pass) {
                        alert('You have successfully changed your password.');
                    } else {
                        alert('You wrote the wrong password.');
                    }
                } 
            } else {
                alert('Wrong password');
            }
        } else {
            alert('You have failed the change.');
        }
    } else {
        alert('Wrong password');
    }
} else {
    alert('I don’t know you');
}