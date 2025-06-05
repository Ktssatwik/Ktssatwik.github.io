const showLogin = () => 
{
    let str = `
    <div class='App-Container'>
    <h1>LOGIN FORM </h1>
    <p><input type="email" id="txtemail" placeholder="email"></P>
    <p><input type="password" id="txtpass" placeholder="password"></P>
    <p><button>LOG IN</button>
    <p><button onclick="showRegister()">REGISTER</button>
    </div>
    `
    root.innerHTML = str;
}

const showRegister = () => 
{
    let str = `
    <h1>CREATE ACCCOUNT</h1>
    <p><input type="text" id="txtname" placeholder="name"></P>
    <p><input type="email" id="txtemail" placeholder="email"></P>
    <p><input type="password" id="txtpass" placeholder="password"></P>
    <p><button onclick="showLogin()">REGISTOR</button></p>
    `
    root.innerHTML = str;
}