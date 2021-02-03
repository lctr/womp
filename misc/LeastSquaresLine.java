public class LeastSquaresLine {

  float m, b;

  public static void main(String[] args) {
    float[][] vals = {
      { 1, 2 },
      { 2, 3 },
      { 3, 5 },
      { 4, 7 },
      { 5, 9 },
      { 6, 11 },
      { 7, 13 },
      { 8, 15 },
      { 9, 17 },
      { 10, 19 },
    };

    LeastSquaresLine line = new LeastSquaresLine(vals);

    System.out.println("> Linear regression via least squares approximation:");
    System.out.println("  ⎡ The data provided has a linear approximation of ");
    System.out.println("  ⎜ \t    y = " + line.m + "* x + " + line.b);
    System.out.println("  ⎜ e.g.,");
    System.out.println("  ⎣ \ty(11) = " + line.expectedValue(11));
  }

  public LeastSquaresLine(float[][] data) {
    int len = data.length;
    float m, b;

    if (1 == len) {
      m = 0;
      b = data[0][1];
    } else {
      float x, y, s_x, s_y, s_xx, s_xy;
      s_x = 0;
      s_y = 0;
      s_xx = 0;
      s_xy = 0;

      int i = 0;
      while (i < len) {
        x = data[i][0];
        y = data[i][1];
        s_x += x;
        s_y += y;
        s_xx += x * x;
        s_xy += x * y;
        i++;
      }

      float dx = len * s_xx - s_x * s_x;
      float dy = len * s_xy - s_x * s_y;

      m = dy / dx;
      b = s_y / len - (m * s_x) / len;
    }
    this.m = m;
    this.b = b;
  }

  public float[] getCoefficients() {
    float[] coefficients = { this.m, this.b };
    return coefficients;
  }

  public float expectedValue(float x) {
    float val = this.m * x + this.b;
    return val;
  }
}
