import express from 'express';
import morgan from 'morgan';
import ViteExpress from 'vite-express';
import generateId from '../src/utils/idGenerator.js';

const app = express();
const port = '8000';

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

ViteExpress.config({ printViteDevServerHost: true });

const TEST_DATA = [
    { id: 0, name: 'Drax', initiative: 22, armor: 18, currentHP: 50, maxHP: 50, hero: true },
    { id: 1, name: 'Gamora', initiative: 18, armor: 15, currentHP: 40, maxHP: 40, hero: true },
    { id: 2, name: 'Rocket', initiative: 1, armor: 13, currentHP: 30, maxHP: 30, hero: true },
    { id: 3, name: 'Star Lord', initiative: 17, armor: 16, currentHP: 35, maxHP: 35, hero: true },
    { id: 4, name: 'Thanos', initiative: 9, armor: 20, currentHP: 150, maxHP: 150, hero: false },
    { id: 5, name: 'Ronan', initiative: 12, armor: 17, currentHP: 75, maxHP: 75, hero: false },
  ];

  // Routes go here

  app.get('/api/combat', (req, res) => {
    res.json(TEST_DATA);
  });
  
  app.post('/api/combat', (req, res) => {
    const {initiative, name, armor, currentHP, maxHP, hero} = req.body;
    
    const newItem = {
        id: generateId(),
        // if no value is provided in req.body, use default values
        initiative: +(initiative) || 0,
        name: name || '',
        armor: +(armor) || 0,
        currentHP: +(currentHP) || maxHP,
        maxHP: +(maxHP) || 0,
        hero: hero || true,
    };
    TEST_DATA.push(newItem);
    res.json(newItem);
  });

  app.put('/api/combat/:id', (req, res) => {
    const { id } = req.params;
    const { initiative, name, armor, currentHP, maxHP, hero} = req.body;

    const index = TEST_DATA.findIndex((item) => item.id === +(id));
    if (index === -1) {
        res.status(404).json({ error: `Item with ID ${id} not found!`});
    } else {
        const item = TEST_DATA[index];
        
        // Only update the values that are provided in req.body
        item.initiative = +(initiative) || item.initiative;
        item.name = name || item.name;
        item.armor = +(armor) || item.armor;
        item.currentHP = +(currentHP) || item.currentHP;
        item.maxHP = +(maxHP) || item.maxHP;
        item.hero = hero || item.hero;
        
        res.json(item);
    }
  });

  app.delete('/api/combat/:id/delete', (req, res) => {
    const { id } = req.params;

    const index = TEST_DATA.findIndex((item) => item.id === +(id));
    if (index === -1) {
        res.status(404).json({ error: `Item with ID ${id} not found!`});
    } else {
        TEST_DATA.splice(index, 1);
        res.json({ id: +(id) });
    }
  });

ViteExpress.listen(app, port, () => console.log(`Server is listening on http://localhost:${port}`));