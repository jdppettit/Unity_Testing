#pragma strict

var StartLosingHunger : int = 180; // seconds
var RegularHungerLoss : int = 300; // seconds

var PlayerHealth : int = 100;
var PlayerHunger : int = 0;

var PlayerSpeed;

var HungerTimeElapsed : Time;
var HungerIncrement : float = 5.0;

var IsAlive : boolean = true;

function Start ()
{
	InvokeRepeating("Hunger", StartLosingHunger, RegularHungerLoss);
}

function Hunger()
{
	// Increases hunger automatically based on time
	increaseHunger(10);
}

function decreaseHealth (amount : int)
{
	PlayerHealth = PlayerHealth - amount;
	
	if (PlayerHealth <= 0)
	{
		playerDie();
	}
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
}

function decreaseHunger (amount: int)
{
	PlayerHunger = PlayerHunger - amount;
}

function increaseHunger (amount : int)
{
	if (PlayerHunger == 100)
	{
		decreaseHealth(5);
	}
	else
	{
		PlayerHunger = PlayerHunger + amount;
	}
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
