package org.auctionsense.domain;

import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;

import com.openpojo.reflection.PojoClass;
import com.openpojo.reflection.impl.PojoClassFactory;
import com.openpojo.validation.Validator;
import com.openpojo.validation.ValidatorBuilder;
import com.openpojo.validation.test.impl.GetterTester;
import com.openpojo.validation.test.impl.SetterTester;

import io.quarkus.test.junit.QuarkusTest;

@QuarkusTest
public class CategoryTest {

    @Test
    @Order(1)
    void validate_getters_setters_using_openpojo() {
        PojoClass categoryPojo = PojoClassFactory.getPojoClass(Category.class);
        Validator validator = ValidatorBuilder.create()
                            .with(new SetterTester())
                            .with(new GetterTester())
                            .build();

        validator.validate(categoryPojo);
    }
}
