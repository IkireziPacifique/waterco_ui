<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/member.css">
    <link rel="icon" href="images/logo.png">
    <title>Waterco | Member</title>
</head>
<body>
    <div class="container">
        <div class="nav">
            <h1>WATERco</h1>
            <hr>
            <ul>
                <li><a href="member.php">Members</a></li>
                <li><a href="premise.php">Premises</a></li>
                <li><a href="bill.php">Bills</a></li>
                <li><a href="payment.php">Payments</a></li>
                <li><a href="route.php">Routes</a></li>
                <li><a href="user.php">Users</a></li><br><br><br><br><br><br><br><br><br>
                <li><a href="index.php">LogOut</a></li>
            </ul> 
        </div>
        <div class="body-part">
            <div class="insertion">
                <form onsubmit="event.preventDefault(); onFormSubmit();">
                    <h2>Add Route</h2><br><br>
                    <label for="No_Plants">Number of Plants:</label><br>
                    <input type="text" name="No_Plants" id="No_Plants"><br><br>
                    <label for="Status">Status:</label><br>
                    <input type="tel" name="Status" id="Status"><br><br>
                    <input type="button" value="Add Route" id="btn"><br><br>
                </form>
            </div>
            <div class="view-data">
                <table id="routesList">
                    <thead>
                        <tr>
                            <th>RouteId</td>
                            <th>No_Plants</td>
                            <th>Status</td>
                        </tr>
                    </thead>
                    <tbody>
                    <!-- Inputted data -->
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <script src="js/jquery-3.3.1.js"></script>
    <script src="js/route.js"></script>
</body>
</html>