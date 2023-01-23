const bookingView = () => {
  let html = `
    <div class="booking">
      <div class="booking-info">
        <div class="booking-bilde"></div>
        <p>
          En kjempe bra tekst om hvorfor du burde booke Rene Beathe til ditt
          seminar, undervisning eller noen annen grunn til å gi meg penger.
          <br /><br />
          Hvis du ønsker å se barna dine igjen er det best for alle at du booker
          Rene til alle samlinger, seminar og undervisningstimer.
          <br /><br />
          Hvis du ønsker at det skal bli noe av barna dine burde du presse
          barnehagen din til å dra på seminarene mine hvis ikke kommer de alle
          til å bli uteliggere som fryser om nettene.
        </p>
      </div>
      <div class="booking-moreinfo">
          <p>For mer informasjon om booking kan du ta kontakt på mail: rene.hansen@larvik.kommune.no eller se på kalenderen under for å se når jeg er ledig.</p>
      </div>
      <div class="booking-contact">
           <table cellspacing="0" class="calender">
             <tr>
                <th>MAN</th>
                <th>TIR</th>
                <th>ONS</th>
                <th>TOR</th>
                <th>FRE</th>
                <th>LØR</th>
                <th>SØN</th>
             </tr>
             <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
             </tr>
             <tr>
                <td>8</td>
                <td>9</td>
                <td>10</td>
                <td>11</td>
                <td>12</td>
                <td>13</td>
                <td>14</td>
             </tr>
             <tr>
                <td>15</td>
                <td>16</td>
                <td>17</td>
                <td>18</td>
                <td>19</td>
                <td>20</td>
                <td>21</td>
             </tr>
             <tr>
                <td>22</td>
                <td>23</td>
                <td>24</td>
                <td>25</td>
                <td>26</td>
                <td>27</td>
                <td>28</td>
             </tr>
             <tr>
                <td>29</td>
                <td>30</td>
                <td>31</td>
             </tr>
           </table>
           <div class="booking-contactform">
              <form>
                <h1>Kontakt</h1>
                <table class="booking-contacttable">
                    <tr>
                        <td>Navn</td>
                        <td><input type="text"/></td>
                    </tr>
                    <tr>
                        <td>E-post</td>
                        <td><input type="text"/></td>
                    </tr>
                    <tr>
                        <td>Adresse</td>
                        <td><input type="text"/></td>
                    </tr>
                    <tr>
                        <td>Postkode</td>
                        <td><input type="text"/></td>
                    </tr>
                </table>
                <button>Send</button>
              </form>
           </div>
      </div>
    </div>
    `;

  return html;
};
