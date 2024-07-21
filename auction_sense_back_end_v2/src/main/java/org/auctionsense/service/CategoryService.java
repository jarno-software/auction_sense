package org.auctionsense.service;

import java.util.List;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

import org.auctionsense.domain.Category;
import org.auctionsense.repository.CategoryRepository;

import io.smallrye.mutiny.Uni;

@ApplicationScoped
public class CategoryService {
    @Inject
    CategoryRepository categoryRepository;

    public Uni<List<Category>> allCategories() {
        return categoryRepository.listAll();
    }
}
