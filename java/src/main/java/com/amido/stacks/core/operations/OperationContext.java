package com.amido.stacks.core.operations;

public abstract class OperationContext {

  private String correlationId;

  public OperationContext(String correlationId) {
    this.correlationId = correlationId;
  }

  public abstract int getOperationCode();

  /** No arg constructor. */
  public OperationContext() {}

  public String getCorrelationId() {
    return correlationId;
  }

  public void setCorrelationId(String correlationId) {
    this.correlationId = correlationId;
  }

  @Override
  public String toString() {
    return "OperationContext{"
        + "operationCode="
        + getOperationCode()
        + ", correlationId="
        + correlationId
        + '}';
  }
}
