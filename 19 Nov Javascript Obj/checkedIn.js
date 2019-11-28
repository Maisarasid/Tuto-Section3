/*var hotel = {
  hotelName: ['Hilton', 'Le Meridian'],
  pool: yes, no,
  roomRate: [450,400],
  booked:[78,66],
  noOfRoom:[200,158],
  info: function() {
    alert( 'I checked in' + this.hotelName[0] + '. It has' + this.pool[0] + '. The room rate is ' + this.roomRate[0]);

  },
  greeting: function() {
    alert('Hi' + this.hotelName[0]);
  }
};
*/

function Hotel(hotelName, pool, roomRate, booked, noOfRoom) {
  this.hotelName= hotelName;
  this.pool = pool;
  this.roomRate= roomRate;
  this.booked = booked;
  this.noOfRoom = noOfRoom;

  this.info = function() {
    alert("I checked in" + this.hotelName + ' hotel.');
    if(pool)
      alert("It has a pool");
    else
      alert("It has no pool");
    alert("The room rate is " + this.roomRate);
    alert("The availability room is " + this.booked);
    alert("The no of room booked is " + this.noOfRoom);

  };

  this.availability= function() {
    return this.noOfRoom = this.booked;
  }
}

var hotel1 = new Hotel('Hilton', true, 450, 78, 200);
var hotel2 = new Hotel('Le Meridien', false, 400, 66, 158);

hotel1.info();
hotel2.info();

 document.getElementById('one').textContent = h1.availability();
