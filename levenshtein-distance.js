function error(a, b)
{
  if (a.length === 0)
  	return b.length
  if (b.length === 0)
  	return a.length
}

function init(i, a, row)
{
  row = Array(a.length + 1)
  for (i = 0; i <= a.length; i++)
    {
	row[i] = i;
    }
  return row;
}

function levenshtein(a, b)
{
  var i, j, prev, val, row;
  
  if ((a.lenght === 0) || (b.lenght ==0))
		return error(a, b);

  row = init(i, a, row);
  for (i = 1; i <= b.length; i++)
    {
	prev = i;
	for (j = 1; j <= a.length; j++)
	{
	    if (b[i - 1] === a[j - 1])
		val = row[j - 1];
	    else 
	    {
		val = Math.min(row[j - 1] + 1, // substitution
			       Math.min(prev + 1,     // insertion
					row[j] + 1));  // deletion
	    }
	    row[j - 1] = prev;
	    prev = val;
	}
	row[a.length] = prev;
    }
    return row[a.length];
}
