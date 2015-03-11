#pragma strict

var PlayerHealth : int = 100;
var PlayerHunger : int = 0;

var PlayerSpeed;

var IsAlive : boolean;

function decreaseHealth (amount : int)
{
	PlayerHealth = PlayerHealth - amount;
	
	if (PlayerHealth <= 0)
	{
		playerDie();
	}
	
	GUI.Box (Rect (Screen.width*0.5, 200, 102, 22), ""+PlayerHealth);
}

function increaseHealth (amount : int)
{
	if (PlayerHealth + amount <= 100)
	{
		PlayerHealth = PlayerHealth + amount;
	}
	else if (PlayerHealth + amount > 100)
	{
		PlayerHealth = 100;
	}
	
	GUI.Box (Rect (Screen.width*0.5, 200, 102, 22), ""+PlayerHealth);
}

function decreaseHunger (amount: int)
{
	PlayerHunger = PlayerHunger - amount;
}

function increaseHunger (amount : int)
{
	PlayerHunger = PlayerHunger + amount;
}

function playerDie ()
{
	Debug.Log("You dead bro.");
}

function OnGUI ()
{
	GUI.Box (Rect (0, Screen.height-22, 102, 22), ""+PlayerHealth);
	GUI.Box (Rect (0, Screen.height-46, 102, 22), ""+PlayerHunger);
}
