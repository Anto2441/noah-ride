import { neon } from '@neondatabase/serverless';

export async function POST(request: Request) {
  try {
    const dbUrl = process.env.DATABASE_URL;

    // Check presence of database URL
    if (!dbUrl) {
      return Response.json(
        { error: 'Database connection string is missing' },
        { status: 500 }
      );
    }

    const sql = neon(dbUrl);
    const { name, email, clerkId } = await request.json();

    // Input data validation
    if (
      !name ||
      typeof name !== 'string' ||
      !email ||
      typeof email !== 'string' ||
      !clerkId ||
      typeof clerkId !== 'string'
    ) {
      return Response.json({ error: 'Invalid input data' }, { status: 400 });
    }

    // SQL query to insert a new user
    const response = await sql`
      INSERT INTO users (
        name, 
        email, 
        clerk_id
      ) 
      VALUES (
        ${name}, 
        ${email},
        ${clerkId}
      )
      RETURNING *;
    `;

    // If no data is returned after insertion
    if (!response) {
      return Response.json({ error: 'Failed to create user' }, { status: 500 });
    }

    // Response in case of success
    return Response.json({ data: response }, { status: 201 });
  } catch (error) {
    console.error('Error creating user:', error);
    return Response.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
