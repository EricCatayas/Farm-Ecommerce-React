

public class X {
    private int lastIdUsed;

    public int getNextId() {
        return ++lastIdUsed;
    }
}

