#pragma strict

var SpawnObject : GameObject;
var TerrainWidth : float = 500.0;
var TerrainLength : float = 500.0;

var SpawnStartDelay : float = 0;
var SpawnRate : float = 5.0;
var MaxEnemies : int = 25;

private var CurrentEnemies : int = 0;

function Start () 
{
	InvokeRepeating("Spawn", SpawnStartDelay, SpawnRate);
}

function Spawn () 
{
	if (CurrentEnemies < MaxEnemies)
	{
		var position: Vector3 = Vector3(Random.Range(1, TerrainLength), 1, Random.Range(1, TerrainLength));	
		Instantiate(SpawnObject, position, Quaternion.identity);
		CurrentEnemies += 1;
	}
	else
	{
		Debug.Log("Too many enemies.");
	}
}

function Update () 
{

}