package com.amido.stacks.core.mapping;

import static com.amido.stacks.core.mapping.MapperUtils.map;
import static java.util.UUID.randomUUID;

import java.util.UUID;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;

@Tag("Unit")
public class MapperUtilsTest {

  @Test
  public void shouldConvertBetweenUuidAndString() {

    UUID uuid = randomUUID();
    Assertions.assertEquals(map(uuid), uuid.toString());
  }

  @Test
  public void shouldConvertBetweenStringAndUuid() {

    UUID uuid = randomUUID();
    Assertions.assertEquals(map(uuid.toString()), uuid);
  }
}
