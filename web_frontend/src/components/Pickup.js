import React from "react";
import "./Pickup.css";

function demoButton() {
    console.log("begin test1")
    const Http = new XMLHttpRequest();
    const url='https://d65a32a748279ab3db732254aaa24a9f.m.pipedream.net';
    Http.open("GET", url);
    Http.send();
    console.log("end test1")
}

function Pickup() {
  return (
    <body>
      <table className = "table1"><tr><th>
        <br/><br/>
        <img src="Best_buy_logo_2018.svg" alt="Best Buy" width="250"/>
        <br/><br/><br/>
        <p>Hi John Smith,</p>
        <h2>Your order is ready for pickup #12345678</h2>
        <br/><br/>
        <b>Great news! Your order is ready for anytime pickup or scheduled pickup at our Richmond store.</b>
        <p>Schedule a pickup to speedup the process by letting us know ahead of time when you will be arriving. Our Blue Shirts will prepare for your arrival and be ready to drop off your order faster than ever. 3 hours before your schedule pickup, an email with more instructions will be sent.</p>
        <p>Alternatively you can still follow anytime pickup steps and text us when you arrive in the designated pickup area.</p>

        <table><tr><td style={{backgroundColor: "#eeeeee"}}>
            <h4>Select a time slot</h4>
        <table className = "table2">
            <tr>
                <th>Time/Date</th>
                <th>Sat, Jan 30</th>
                <th>Sun, Jan 31</th>
                <th>Mon, Feb 1</th>
            </tr>
            <tr>
                <td>11:00 - 12:00</td>
                <td>asdffdas</td>
                <td>asdfdfas</td>
                <td>asedffda</td>
            </tr>
            <tr>
                <td>12:00 - 1:00</td>
                <td>asdffdas</td>
                <td>asdfdfas</td>
                <td>asedffda</td>
            </tr>
            <tr>
                <td>1:00 - 2:00</td>
                <td>asdffdas</td>
                <td>asdfdfas</td>
                <td>asedffda</td>
            </tr>
            <tr>
                <td>2:00 - 3:00</td>
                <td>asdffdas</td>
                <td>asdfdfas</td>
                <td>asedffda</td>
            </tr>
            <tr>
                <td>3:00 - 4:00</td>
                <td>asdffdas</td>
                <td>asdfdfas</td>
                <td>asedffda</td>
            </tr>
            <tr>
                <td>4:00 - 5:00</td>
                <td>asdffdas</td>
                <td>asdfdfas</td>
                <td>asedffda</td>
            </tr>
            <tr>
                <td>5:00 - 6:00</td>
                <td>asdffdas</td>
                <td>asdfdfas</td>
                <td>asedffda</td>
            </tr>
            <tr>
                <td>6:00 - 7:00</td>
                <td>asdffdas</td>
                <td>asdfdfas</td>
                <td>asedffda</td>
            </tr>
        </table>
        </td></tr></table>
        
        <button id="demo" onClick={demoButton} className = "submit">Submit</button>

        <h4>Ready to check in?</h4>
        <p>If you're at the store, let us know you're here and we'll bring your order out to you. You'll need your order number to check-in.</p>
        <br/>
        <b>Order Number</b>
        <p>877475383</p>
        </th></tr></table>
        <table className = "table1" style={{backgroundColor: "#eeeeee"}}><tr><th>
            <h4>Thank you for shopping at BestBuy.ca</h4>
            <p>This email was sent from an outgoing-only address that cannot accept incoming emails. If you still have questions, please visit our help centre for more information</p>
            <b>Promotional Emails:</b><p>As a customer of Best Buy Canada, we may send you promotional emails. If you do not wish to receive promotional emails from Best Buy Canada, please feel free to unsubscribe.</p>
        </th></tr>
        </table>
    </body>
  );
};

export default Pickup;
