#pragma strict

private var Distance : float;

var Weapon : Transform;

var DamageAmount = 10;
var MaxDistance = 1.5;

function Update () 
{
	if (Input.GetButtonDown("Fire1"))
	{
		Debug.Log("Player clicked fire1");
		doAttack();
	}
}

function doAttack() 
{
	GetComponent.<Animation>().Play("SwordAttack");
	var IsHit : RaycastHit;
	if (Physics.Raycast (Weapon.transform.position, Weapon.transform.TransformDirection(Vector3.forward), IsHit))
	{
		Debug.Log("Thing hit");
		Distance = IsHit.distance;
		
		if (Distance < MaxDistance)
		{
			IsHit.transform.SendMessage("decreaseHealth", DamageAmount, SendMessageOptions.DontRequireReceiver);
		}
	}
}