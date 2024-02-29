import request from 'supertest';
import { app, server } from '../app';
import { db_connection } from '../database/db_connection';

describe("GET /tasks", ()=> {
    let response : any;

    beforeAll(async () => {
        response = await request(app).get('/tasks');
    })

    test('should return status code 200 when tasks are called', async () =>{    
        expect(response.status).toBe(200);
    })
    
    test('should return in json format when tasks are called', async () =>{
        expect(response.headers['content-type']).toContain('json');
    });
})

describe('POST /tasks', () => {
    let response: any;

    let newTask = {
        "name": "test1",
        "description": "test1"
    }

    beforeEach(async() => {
        response = await request(app).post('/tasks').send(newTask);
    })

    test("should return status code 201", async () => {
        expect(response.status).toBe(201);
    })

    test("should return status coded 400 if body is empty", async () => {
        let response = await request(app).post('/tasks').send({});
        expect(response.status).toBe(400);
    })
})

describe('DELETE /tasks', () => {
    // muchos tests
})



// al finalizar los tests, se deben cerrar el servidor y la conexión a la base de datos

afterAll(async () => {
    // cerrar servidor
    server.close();
    // cerrrar conexión a la base de datos
    await (await db_connection).end();
});

