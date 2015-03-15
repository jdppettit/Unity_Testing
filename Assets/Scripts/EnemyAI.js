private var Distance;
private var AttackTime : float;
private var MoveDirection : Vector3 = Vector3.zero;

var RoamRange : int = 5;

var Target : Transform;
var LookAtDistance = 25.0;
var ChaseRange = 15.0;
var AttackRange = 1.5;
var MoveSpeed = 5.0;
var Damping = 6.0;
var AttackRepeatTime = 1;
var Gravity = 20.0;

var DamageAmount = 10;
var Health = 100;

var Controller = CharacterController;

function decreaseHealth (amount : int)
{
	Health = Health - amount;
	
	if (Health <= 0)
	{
		Debug.Log("Enemy died.");
		enemyDie();
	}
}

function enemyDie ()
{
	Destroy (gameObject);
}

function enemyLookAt ()
{
	GetComponent.<Renderer>().material.color = Color.yellow;
	
	var rotation = Quaternion.LookRotation(Target.position - transform.position);
	
	transform.rotation = Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime * Damping);
}

function enemyChase ()
{
	GetComponent.<Renderer>().material.color = Color.red;
	transform.Translate(Vector3.forward * MoveSpeed * Time.deltaTime);
}

function enemyAttack ()
{
	if (Time.time > AttackTime)
	{
		Target.SendMessage("decreaseHealth", DamageAmount);
		Debug.Log("The enemy attacked");
		AttackTime = Time.time + AttackRepeatTime;
	}
}

function enemyRoam ()
{
	var targetPosition: Vector3 = Vector3(Random.Range(1, 500), 1, Random.Range(1, 500));
	var rotation = Quaternion.LookRotation(targetPosition - transform.position);
	transform.rotation = Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime * Damping);
	transform.Translate(Vector3.forward * MoveSpeed * Time.deltaTime);
}

function Start () 
{
	AttackTime = Time.time;
	Target = GameObject.Find("Player").transform;
	//InvokeRepeating("enemyRoam", 1, 1);
}

function Update () 
{
	enemyRoam();
	Distance = Vector3.Distance(Target.position, transform.position);
	
	if (Distance < LookAtDistance)
	{
		enemyLookAt();
	}
	
	if (Distance > LookAtDistance)
	{
		GetComponent.<Renderer>().material.color = Color.green;
	}
	
	if (Distance < AttackRange)
	{
		enemyAttack();
	}
	else if (Distance < ChaseRange)
	{
		enemyChase();
	}
}