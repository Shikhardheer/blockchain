import Debug "mo:base/Debug";
import Nat "mo:base/Nat";
import Int "mo:base/Int";
actor Web3bank{
  var cur:Int=0;
// Debug.print(debug_show(cur));
  public func topup(amount:Int):async Int{
    cur+=amount;
     Debug.print(debug_show(cur));

    return cur;
  };
  public func withd(amount:Int):async Int{
    //  cur-=amount;
    //  return cur;
    let temp:Int=cur-amount;
    // Debug.print(debug_show(temp));
   
    if(temp>=0){
    cur-=amount;
    Debug.print(debug_show(cur));
    return cur;
    
    }
    else {
      Debug.print("Not enough balance");
      return -1;
    }
  };
  public query func currbala():async Int{
     return cur;
  };
}


