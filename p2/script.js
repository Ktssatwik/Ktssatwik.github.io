const showLogin = () => 
{
    let str = `
    <div>
    <h1>LOGIN FORM </h1>
    <p><label for="email">ENTER EMAIL</LABEL>
    <input type="email" id="txtemail" placeholder="email" required></P>

    <p><label for="pass">ENTER PASSWORD</LABEL>
    <input type="password" id="txtpass" placeholder="password" required></P>

    <p><button onclick="showWelcome()">LOG IN</button>
    <p><button onclick="showRegister()">REGISTER</button>
    </div>
    `
    root.innerHTML = str;
}

const showWelcome = () =>
{
    let str=`<h1> <b>WELCOME</B> </h1>`
    root.innerHTML = str;
}

const showRegister = () => 
{
    let str = `
    <h1>CREATE ACCCOUNT</h1>
    <p><label for="name">ENTER NAME</LABEL> 
    <input type="text" id="txtname" placeholder="name" required></P>

    <p><label for="email">ENTER EMAIL</LABEL> 
    <input type="email" id="txtemail" placeholder="email" required></P>
    
    <p><label for="pass">ENTER PASSWORD</LABEL> 
    <input type="password" id="txtpass" placeholder="password" required></P>
    <p><button onclick="showLogin()">REGISTOR</button></p>
    <p><button onclick="showLogin()">ALREADY HAVE AN ACCOUNT?</button></p>
    `
    root.innerHTML = str;
}