/*
 * Create the function factorial here
 */
function factorial(n)
{
    var fact = 1
    if (n < 2)
    {
        return 1;
    }
    for(var i = 2; i <= n; i++)
    {
        fact *= i;
    }
    return fact;
}
