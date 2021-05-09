<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/member.css">
    <link rel="icon" href="images/logo.png">
    <title>Waterco/Member</title>
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
                    <h2>Add Payment</h2><br><br>
                    <label for="PaymentId">Payment Model:</label><br>
                    <input type="text" name="PaymentId" is="PaymentId"><br><br>
                    <label for="Remaining">Remaining Amount:</label><br>
                    <input type="text" name="Remaining" id="Remaining"><br><br>
                    <label for="Bill_Paid">Bill Paid:</label><br>
                    <input type="text" name="Bill_Paid" id="Bill_Paid"><br><br>
                    <input type="button" value="Add Payment" id="btn"><br><br>
                </form>
            </div>
            <div class="view-data">
                <table id="paymentsList">
                    <thead>
                        <tr>
                            <th>Payment Id</td>
                            <th>Payment Model</td>
                            <th>Remaining</td>
                            <th>Bill Paid</td>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- Table Data -->
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <script src="js/jquery-3.3.1.js"></script>
    <script src="js/payment.js"></script>
</body>
</html>