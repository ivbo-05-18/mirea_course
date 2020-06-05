import converterl from './converter-logik';


describe('Тесты математики', () => {
  test('test USD=USD', async () => {
    const result = await converterl(1, 'USD', 'USD');
    expect(result).toBe(1);
  });
  test('should return 0 ', async () => {
    const result = await converterl('', 'USD', 'USD');
    expect(result).toBe(0);
  });
});
